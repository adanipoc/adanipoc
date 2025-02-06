export default function decorate(block) {    
    [...block.children].forEach((row,i) => {
        [...row.children].forEach((col,j) => {
            alert(i+","+j);
        });
    });
  }