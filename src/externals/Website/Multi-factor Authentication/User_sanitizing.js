function sanitizeInput(input) {
  return input.replace(/<script.*?>.*?<\/script>/gi, '').replace(/<.*?script.*?>/gi, '');
}
