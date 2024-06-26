export function getLocalISOString() {
    const now = new Date();
    const localDate = now.toLocaleDateString('en-GB', {
      timeZone: 'Asia/Dubai',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).split('/').reverse().join('-');
  
    const localTime = now.toLocaleTimeString('en-GB', {
      timeZone: 'Asia/Dubai',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
  
    return `${localDate}T${localTime}`;
  }

