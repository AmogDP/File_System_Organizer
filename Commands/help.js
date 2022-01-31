function helpfn(){
    console.log(`
    Your entered command is wrong. Check from man page
    node <file> <command> <folder> <argument>
    node mycli view "file\\path"
    node mycli organize "file\\path" <options>
    node mycli help
    `);
}

module.exports ={
    help : helpfn
    
}