import { render } from "sass";
import glob from "glob";
import fs from "fs";

const cwd = process.cwd();
glob(`${cwd}/src/scss/**/*.scss`, {ignore: `${cwd}/src/scss/**/_*.scss`, dot:true}, (err, filesArr) => {
  if (err) throw err;
  let index = 0;
  filesArr.forEach((file) => {
    const outFile = file.replace(/\.scss/g, ".css").replace(/scss/g, "snap_compiled");
    const outDir = outFile.split("/");
    outDir.pop();
    fs.mkdir(outDir.join("/"), { recursive: true }, (err) => {
    if (err) throw err;
    render({ file, outFile }, (scssErr, css) => {
      if (scssErr) throw scssErr;
      if (css.css.length!==0) {
      fs.writeFileSync(outFile, css.css?.toString("utf8") ?? "", {encoding: "utf8"})
      index++
      console.log(`${index}. Finished outputting scss from ${file} to ${outFile}\n`)
      }
    })
    })
  })
})

