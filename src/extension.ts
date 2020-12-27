// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
// import * as vscode from 'vscode';
import { window, commands, ExtensionContext, ViewColumn } from 'vscode';
import { showQuickPick, showInputBox } from './basicInput';
import { quickOpen } from './quickOpens';
import axios from 'axios'
import { readFile, openFile } from './working_with_files'
// const fileData = fs.readFileSync(path.join(__dirname, 'snippets/snippets.code-snippets'))
// console.log(fileData)

axios.defaults.url = "https://logic-coded-api.herokuapp.com"


const dataFiles  = readFile('/Users/africaxyz/Documents/extension/logicoded_extension/snippets/snippets.code-snippets')
const opiles   = openFile('/Users/africaxyz/Documents/extension/logicoded_extension/snippets/snippets.code-snippets')
// console.log(dataFiles)

const updateLocalData = async () => {
	const backDatat = await axios.post("/developer/data/",{})
	console.log(JSON.stringify(backDatat))

	return JSON.stringify(backDatat)

}


console.log(updateLocalData(), "worked ")

export function activate(context: ExtensionContext) {

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
	 

 


<!DOCTYPE html>
<html>
    <head lang="en">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <script language="JavaScript">
          function showInput() {
             const user_input= document.getElementById("user_input").value;
             const users_input=      document.getElementById("users_input").value;
             const user_msg= document.getElementById('user_msg').value;


             document.querySelector('body').innerHTML = user_input + user_msg + users_input
             console.log(user_input,users_input,user_msg)
                         
          }
         
        </script>
  <title>Logicoded </title>
      
        </head>
    <body>
        <div class="upload_code">
            <input type="text"  placeholder="Name" id="user_input">
            <input type="text" placeholder="lastname" id="users_input">
            <textarea name="Message" id="user_msg" cols="30" rows="10"></textarea>
        <input type="submit" onclick="showInput();"><br/>
          
        </div>
        <br>

        <style>
          * {
            background-color: transparent;
            outline: none;
      
          }
      
         
          input {
            height: 40px;
          }
          .upload_code {
            margin-top: 100px;
            display: grid;
            grid-template-columns: 1fr;
            row-gap: 30px;
          }
      
          .submit-btn {
            background-color: blue;
            color: white;
            height: 40px;
          }
           .upload_code input , .upload_code textarea, .upload_code button {
            color: green;
            width: 90%;
            margin-left: 10%;
            max-width: 400px;
          }
          
        </style>
      
    </body>
</html>
	`
}
  


// this method is called when your extension is deactivated
export function deactivate() {}
