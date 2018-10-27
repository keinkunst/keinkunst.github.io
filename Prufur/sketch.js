
var table;

function preload() {
//my table is comma separated value "csv"
//and has a header specifying the columns labels
table = loadTable('data/syslur.csv', 'csv', 'header');
}

function setup() {
  var rows = table.getRows();
  var longest = '';
  for (var r = 0; r < rows.length; r++) {
    var species = rows[r].getString('Name');
    if (longest.length < species.length) {
      longest = species;
    }
  }
  print('longest: ' + longest);
}
