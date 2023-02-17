function isSymmetric(arr) {
    
    let reversed = arr.slice(0).reverse(); // Clone and reverse    
    let equal = (JSON.stringify(arr) == JSON.stringify(reversed));    
    
  if (!Array.isArray(arr)) {
    return false; // Non-arrays are non-symmetric
  }
  
  return equal;
}

module.exports = isSymmetric;