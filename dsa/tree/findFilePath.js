const fileSystem = {
  name: 'root',
  children: [
    { 
      name: 'src', 
      children: [
        { name: 'app.js', children: [] },
        { name: 'styles.css', children: [] }
      ] 
    },
    { 
      name: 'public', 
      children: [{ name: 'index.html', children: [] }] 
    }
  ]
};

// Target: 'index.html' -> Expected Output: 'root/public/index.html'

function findFilePath(fileSystem, targetFile, path="") {
    let newPath = path ? `${path}/${fileSystem.name}`: fileSystem.name;
    
    if (fileSystem.name === targetFile) return newPath;
    
    if (fileSystem.children) {
        for (let child of fileSystem.children) {
            let filePath = findFilePath(child, targetFile, newPath);
            
            if (filePath !== null) return filePath;
        }
    }
    
    return null;
}

console.log(findFilePath(fileSystem, "index.html"));
