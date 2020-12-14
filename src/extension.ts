// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
// import * as vscode from 'vscode';
import { window, commands, ExtensionContext, ViewColumn } from 'vscode';
import { showQuickPick, showInputBox } from './basicInput';
import { quickOpen } from './quickOpens';
import axios from 'axios'


axios.defaults.url = "https://logic-coded-api.herokuapp.com"


const updateLocalData = async () => {
	const backDatat = await axios.post("/developer/data/",{})

	console.log(backDatat)
}

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated

	updateLocalData()
	console.log('Congratulations, your extension "logicoded" is now active!');

	context.subscriptions.push(
		commands.registerCommand('logicoded.form', () => {
		  // Create and show panel
		  const panel = window.createWebviewPanel(
			'Contribute To Logicoded ',
			'Logicoded',
			ViewColumn.One,
			{
				enableScripts: true,
				retainContextWhenHidden: true,
			}
		  );
	
		  // And set its HTML content
		  panel.webview.html = getWebviewContent();
		})
	  );

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = commands.registerCommand('logicoded.start', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		window.showInformationMessage('Hello World from logicoded!');
	});

	const editContent = commands.registerCommand('logicoded.func', function () {
		// Get the active text editor
		const editor = window.activeTextEditor;

		if (editor) {
			const document = editor.document;
			const selection = editor.selection;

			// Get the word within the selection
			const word = document.getText(selection);
			// const reversed = word.split('').reverse().join('');
			// editor.edit(editBuilder => {
			// 	editBuilder.replace(selection, reversed);
			// });

		}
	});

	context.subscriptions.push(editContent);


	context.subscriptions.push(disposable);

	context.subscriptions.push(commands.registerCommand('logicoded.signup', async () => {
		const options: { [key: string]: (context: ExtensionContext) => Promise<void> } = {
			showQuickPick,
			showInputBox,
			quickOpen,
		};
		const quickPick = window.createQuickPick();
		quickPick.items = Object.keys(options).map(label => ({ label }));
		quickPick.onDidChangeSelection(selection => {
			if (selection[0]) {
				options[selection[0].label](context)
					.catch(console.error);
			}
		});
		quickPick.onDidHide(() => quickPick.dispose());
		quickPick.show();
	}));
}


function getWebviewContent() {
	return `
	
	asdsa
`
}
  


// this method is called when your extension is deactivated
export function deactivate() {}