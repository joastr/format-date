'use strict';
function checkNull(number, value) {
    return number ? `${number}${value} ` : ''
  }
  
  const formatDate = timeInSec => {
    const hour = Math.floor(timeInSec / 3600);
    const minute = Math.floor(timeInSec % 3600 / 60);
    const second = (timeInSec % 60);
    return ! timeInSec ? '0s' : `${checkNull(hour, 'h')}${checkNull(minute, 'm')}${checkNull(second, 's')}`.trim();
  }
  
  module.exports = formatDate;
  
  module.exports = formatDate;