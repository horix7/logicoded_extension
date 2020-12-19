import * as fs from 'fs'

export async function readFile(filePath: any) {
  try {
    const data = await fs.readFileSync(filePath);
    console.log(data.toString());

    return data 
  } catch (error) {
    console.error(`Got an error trying to read the file: ${error.message}`);
  }
}

export async function openFile(filePath: any ) {
    try {
      const csvHeaders = 'name,quantity,price'
      const addingfile = await fs.writeFileSync( filePath , csvHeaders);
      return 'done'
      console.log(addingfile)
    } catch (error) {
      console.error(`Got an error trying to write to a file: ${error.message}`);
    }
  }
