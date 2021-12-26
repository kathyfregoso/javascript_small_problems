// QUESTION(S):
// what is a buffer? according to wiki:
// - "region of a physical memory storage used to temporarily store data while
//   it is being moved from one place to another."

// DATA STRUCTURES:
// arrays

function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

// answer:

// addToRollingBuffer1:
// .push mutates the buffer [array] by add 1 or more els to the end of it

// addToRollingBuffer2:
// .concat merges 2 or more arrays and returns a new array; it doesn't mutate the buffer
