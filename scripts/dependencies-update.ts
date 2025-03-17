import {StaticScript} from './shared/static-script';
import {Files} from './shared/files';
import {executeCommandWithLog, getResultFromCommand} from './shared/utils';
import {Log} from './shared/log';

class DependenciesUpdate extends StaticScript {

	static perform(): void {
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
				executeCommandWithLog(`git commit -am "feat(stackblitz/${project}): update to oblique@${DependenciesUpdate.getVersion()}"`, 'Execute');
				Log.success();
			});
	}

	private static execute(command: string): void {
		executeCommandWithLog(`${command} --fund false`, `Execute`);
	}

	private static getVersion(): string {
		return /(?<=latest:\s*)\d+\.\d+\.\d+(?:-(?:alpha|beta|rc)\.\d+)?/.exec(getResultFromCommand('npm dist-tag @oblique/oblique'))[0];
	}
}

DependenciesUpdate.perform();
