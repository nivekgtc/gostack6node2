const { User } = require('../models/')

class UserController {
  /** Renderiza a view de cadastro */
  create (req, res) {
    return res.render('auth/signup')
  }

  /** Armazena os dados do formulário no banco de dados */
  async store (req, res) {
    await User.create(req.body)

    return res.redirect('/')
  }
}

module.exports = new UserController()
