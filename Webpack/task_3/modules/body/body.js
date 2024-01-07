import $ from 'jquery';
import _ from 'lodash';
import './body.css';

$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');

function updateCounter() {
  let count = 0;

  return () => {
    count++;
    $('#count').text(`${count} click${count > 1 ? 's' : ''} on the button`);
  }
}

let updateCount = updateCounter();
$('button').on('click', _.debounce(() => updateCount(), 500));
