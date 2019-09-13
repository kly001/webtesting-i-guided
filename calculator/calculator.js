module.exports = {
  add,
};

function add(x) {
 const args = Array.isArray(x) ? x : Array.from(arguments)
 return args.reduce((acculmulator, value) => {
   return acculmulator + value
 }, 0)
}
