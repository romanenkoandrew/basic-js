module.exports  = function createDreamTeam( members ) {
  if ((!members) || (!Array.isArray(members))) 
  return false
  let usefull_arr = []
  let useless_arr = []
  members.forEach(element => { 
    if (typeof(element) =='string')
    {element = element.trim()
      usefull_arr.push(element[0].toUpperCase())}
    else useless_arr.push(element)
  });
  return usefull_arr.sort().join('')
};