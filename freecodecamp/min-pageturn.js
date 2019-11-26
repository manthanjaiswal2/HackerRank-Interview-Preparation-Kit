// Here n is the number of pages in the books and p is the desired page. This will give the minimum number of turn to get the desired page.

function pageCount(n, p) {
    
    return Math.min(Math.floor(p / 2), Math.floor(n / 2) - Math.floor(p / 2));
}

pageCount(5,4);
