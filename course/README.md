# Practice the Command Line Interface (CLI)

## Goals

- Basic commands

## Tasks

In this practice we will create a basic web-app project with the CLI.

**IMPORTANT**! All this practice must be done with the CLI (except for unzipping files and editing their contents)

### **Step 0**: Create the skylab folder structure following in your system documents folder:

```
skylab
├── course
│   └── frontend
└── precourse
```

Make sure you create this folder in your documents folder 

Hint: you may use the commands pwd, mkdir, cd.

### **Step 1**: Copy the contents of your precourse into precourse folder.

Hint: command cp -r ...

### **Step 2**: Download and unzip *hiWorld.zip* from slack channel.

- Unzip the hiWorld.zip file in skylab/course/frontend/hiWorld, the final result should be:

```
skylab
├── course
│   └── frontend
│       └── hiWorld
│           ├── deleteMePlease
│           │   └── meToo.js
│           ├── indice.html
│           └── scripts.js
└── precourse
```

### **Step 3**: Clean the project

- Rename the project folder *hiWorld* to *helloworld*
- Go to folder *helloworld*
- Remove the folder *deleteMePlease* 
- List the project folder to check the changes

Hint: commands rm, ls, ...

### **Step 4**: Adjust some files 

- Rename *script.js* to *main.js*
- Rename *indice.html* to *index.html* 
- Write these lines in *index.html* (use Notepad in Windows or TextEdit in Mac)

```html
<html>
    <head>
        <meta charset="UTF-8">
    <title>Document</title>
        <link rel="stylesheet" href="styles/styles.css">
    </head>
    <body>
        hello world!
    </body>
    <script src="scripts/main.js">
    </script>
</html>
```

- List the project folder to check the changes

Hint: mv...

### **Step 5**: Create a file

- Check that you are in helloworld folder, otherwise go to it
- Create a file named main.css
- Write these lines in *main.css* 

```css
body{
    color:plum;
    font-size:120px;
}
```

Hints: command touch ...

### **Step 6**: Make Directory

- Make the *styles* and *scripts* folders in helloworld

Hint: mkdir ...

### **Step 7**: Move files

- Move main.css to styles folder
- Move main.js to scripts folder

Hint: mv ...

### **Step 8**: Check the project

- The final result should be this:

```
skylab
├── course
│   └── frontend
│       └── helloworld
│           ├── index.html
│           ├── scripts
│           │   └── main.js
│           └── styles
│               └── main.css
└── precourse
    └── (your precourse files)
```

- Open index.html with your browser and see the results, you should see a welcome alert and a web page with hello world.
