import {StaticScript} from './shared/static-script';
import {Files} from './shared/files';
import {executeCommandWithLog} from './shared/utils';
import {Log} from './shared/log';

class DependenciesUpdate extends StaticScript {

	static perform(): void {
		const rootDirectory = Files.buildOSSafePath(__dirname, '/../');
		const excludedProjects = ['oblique-language-change-in-master-layout'];

		const allProjectPaths = Files.readDirectory(rootDirectory)
			.filter(project => Files.exists(Files.buildOSSafePath(rootDirectory, project, 'package.json')))
			.filter(foundProject => excludedProjects.every(
				excludedProject => Files.buildOSSafePath(rootDirectory, excludedProject, 'package.json') !== Files.buildOSSafePath(rootDirectory, foundProject, 'package.json'))
			)
			.map(filteredProject => Files.buildOSSafePath(rootDirectory, filteredProject));

		allProjectPaths.forEach(path => {
			Log.start('Update dependencies');
			DependenciesUpdate.execute(`npm update --prefix ${path} --save --audit false`);
			DependenciesUpdate.execute(`npm audit fix --prefix ${path} --audit-level=none`);
			DependenciesUpdate.execute(`npm dedupe --prefix ${path} --audit false`);
			DependenciesUpdate.execute(`npm prune --prefix ${path} --audit false`);
			Log.success();
		})
	}

	private static execute(command: string): void {
		executeCommandWithLog(`${command} --fund false`, `Execute`);
	}
}

DependenciesUpdate.perform();
