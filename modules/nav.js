// import { readdir, readFile } from 'fs';
// const baseUrl = 'docs'
// const getFileList = (folderName) => {
//     const path = `${baseUrl}/${folderName}`
//     return new Promise((resolve, reject) => {
//         readdir(path, (err, files) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 const list = []
//                 files.forEach(file => {
//                     const fileName = file.split('.')[0]
//                     const index = fileName.split('-')[0]
//                     const titleWords = fileName.split('-')
//                     let text = ''
//                     titleWords.forEach(((value, index) => {
//                         if(index === 0) {
//                             return;
//                         } else if (index === 1) {
//                             text += value.charAt(0).toUpperCase() + value.slice(1);
//                         } else {
//                             text += ` ${value}`
//                         }
//                     }))
//                     list[index] = { text, link: `/${folderName}/${fileName}`}
//                 });
//                 resolve(list);
//             }
//         });
//     })
// }

// export const MENU_GUIDE = {
//     text: 'Intro', 
//     items: await getFileList('introduction'),
// } 

// export const MENU_FLUTTER = {
//     text: 'Flutter',
//     collapsible: true,
//     items: await getFileList('flutter'),
// }

// export const MENU_STUDY = {
//     text: 'Toy project',
//     collapsible: true,
//     // collapsed: true,
//     items: await getFileList('toy'),
// }

// export const MENU_VITEPRESS = {
//     text: 'Vitepress 블로그',
//     collapsible: true,
//     items: await getFileList('vitepress'),
// }
