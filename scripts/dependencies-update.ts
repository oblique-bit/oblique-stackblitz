import {StaticScript} from './shared/static-script';
import {Files} from './shared/files';
import {executeCommandWithLog, getResultFromCommand} from './shared/utils';
import {Log} from './shared/log';

class DependenciesUpdate extends StaticScript {

	static perform(): void {
        const obliqueVersion = DependenciesUpdate.getVersion();
        DependenciesUpdate.updateDependencies(obliqueVersion);
        DependenciesUpdate.updateProject(obliqueVersion);
	}

    private static getVersion(): string {
        return /(?<=latest:\s*)\d+\.\d+\.\d+(?:-(?:alpha|beta|rc)\.\d+)?/.exec(getResultFromCommand('npm dist-tag @oblique/oblique'))[0];
    }

    private static updateDependencies(obliqueVersion: string): void {
        const excludedProjects = ['oblique-language-change-in-master-layout'];

        Files.readDirectory('.')
            .filter(project => Files.exists(`${project}/package.json`))
            .filter(project => !excludedProjects.includes(project))
            .forEach(project => {
                Log.start(`Update dependencies of ${project}`);
                DependenciesUpdate.execute(`npm update --prefix ./${project} --save --audit false`);
                DependenciesUpdate.execute(`npm audit fix --prefix ./${project} --audit-level=none`);
                DependenciesUpdate.execute(`npm dedupe --prefix ./${project} --audit false`);
                DependenciesUpdate.execute(`npm prune --prefix ./${project} --audit false`);
                executeCommandWithLog(`git commit -am "feat(stackblitz/${project}): update to oblique@${obliqueVersion}"`, 'Execute');
                Log.success();
            });

    }

	private static execute(command: string): void {
		executeCommandWithLog(`${command} --fund false`, `Execute`);
	}

    private static updateProject(version: string): void {
        Log.start('Update release version and date in project files');
        DependenciesUpdate.updatePubliccode(version);
        DependenciesUpdate.updatePackageJson(version);
        executeCommandWithLog(`git commit -am "build(stackblitz): update to oblique@${version}"`, 'Execute');
        Log.success();
    }

    private static updatePubliccode(version: string): void {
        // ignores preversions
        if (/^\d+\.\d+\.\d+\$/u.test(version)) {
            Log.info('Update publiccode release version and date');
            const today = new Date().toISOString().split('T')[0];
            Files.overwrite('publiccode.yml', content =>
                content
                    .replace(/(?<=softwareVersion:\s)\d+\.\d+\.\d+/u, version)
                    .replace(/(?<=releaseDate:\s)\d{4}-\d{2}-\d{2}/, today)
            );
        }
    }

    private static updatePackageJson(version: string): void {
        Log.info('Update package.json release version');
        Files.overwrite('package.json', content =>
            content.replace(/(?<="version":\s")\d+\.\d+\.\d+(-(?:alpha|beta|rc)\.\d+)?(?=")/u, version)
        );
    }
}

DependenciesUpdate.perform();
