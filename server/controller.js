module.exports = {
  register: async (req, res) => {
    const {username, password} = req.body;
    const db = await req.app.get('db')
    const userArr = await db.find_user({username})
    if(userArr.length >= 1) {
      return res.status(200).send({message: 'Username taken.'})
    }
    let newUserArr = await db.new_user({username: username, password: password});
    res.status(200).send({userData: newUserArr, loggedIn: true})
  },
  login: async (req, res) => {
    const {username, password} = req.body;
    const db = req.app.get('db');
    const userArr = await db.find_user({username: username, password: password});
    if(!userArr[0]) {
      return res.status(200).send({message: 'User not found.'})
    }
    return res.status(200).send({userData: userArr, loggedIn: true})
  },
  getPosts: (req, res) => {
    const db = req.app.get('db');
    db.get_posts()
    .then( response => {
      res.status(200).send(response)
    })
    .catch(err => {
      console.log('could not get posts')
    })
  }
}