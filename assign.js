//var papers = ['Paper 1','Paper 2','Paper 3','Paper 4','Paper 5','Paper 6','Paper 7','Paper 8','Paper 9','Paper 10']
//var authors = ['Author 1','Author 2','Author 3','Author 4','Author 5','Author 6','Author 7','Author 8','Author 9','Author 10']


function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function assign(papers_list,authors_list,numb_of_assignments){
  var len = papers_list.length;
  var dict = new Object();
  shuffle(papers_list);
  shuffle(authors_list);

  for(var i=0;i<len;i++){
    var list = [];

    var author = authors[i];
    var num = numb_of_assignments + 1;

    for(var j=(i+1)%len;j<(i+num)%len;j++){
      list.push(authors[j]);
    }

    if(list.length == 3){
      //console.log(list);
      dict[author] = list;
    } else {
      list = [];
    }
  }

}

//assign(papers,authors,3); // sample call

module.exports.assign = assign;
