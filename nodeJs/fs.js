const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, 'notes',), err => {
    if (err) throw err

    console.log('created')
})

fs.writeFile(
    path.join(__dirname, 'notes', 'mynotes.txt'),
    'Just hello',
    (err) => {
        if (err) throw err
        console.log('File created')

        fs.appendFile(
            path.join(__dirname, 'notes', 'mynotes.txt'),
            ' From append file',
            err => {
                if (err) throw err
                console.log('File changed')

                fs.readFile(
                    path.join(__dirname, 'notes', 'mynotes.txt'),
                    'utf-8',
                    (err,data) => {
                        if (err) throw err
                        console.log(data)
                    }
                )
            }
        )
    }
)

fs.rename(
    path.join(__dirname, 'notes', 'mynotes.txt'),
    path.join(__dirname, 'notes', 'notes.txt'),
    err => {
        if (err) throw err

        console.log('File renamed')
    }
)

