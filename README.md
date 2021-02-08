<h1 style="text-align: center; font-weight: bold; margin-bottom: 0;">
  POST-IT
</h1>
<h2 style="text-align: center; margin-bottom: 32px;">
  Share good times for the world!
</h2>

<p>
  Este é um projeto pessoal feito com a finalidade de treinar e desafiar meus conhecimentos no desenvolvimento web.
</p>
<p>
  A ideia é criar uma rede social simples em que o usuário poderia criar um perfil passando alguns de seus dados pessoais e seguir amigos e conhecidos para que possa ver suas publicações (<em>posts</em>).
</p>
<p>
  <li>
    ✅ O protótipo de telas pode ser visto pelo Figma <a href="https://www.figma.com/file/I4PMlWmve8JepmF6AXtI2s/?node-id=0%3A1" target="_blank">clicando aqui.</a>
  </li>
  <li>
    ✅ O projeto do DER, feito no Whimsical pode ser <a href="https://whimsical.com/portfolio-post-it-DAefHLthHS8WuZXMB93cfZ" target="_blank">consultado aqui.</a>
  </li>  
</p>
<br>
<p>
  As principais tecnologias utilizadas para este projeto foram:
  <li>
    🔵 Node.js para o back-end;
  </li>
  <li>
    🔵 ReactJS para o front-end;
  </li>
  <li>
    🔵 PostgreSQL.js para o banco de dados.
  </li>
</p>
<br>

<hr>

<h2>Rotas da API</h2>

<li><code>POST /users</code> Faz a criação de um novo usuário. Deve ser passado um JSON no corpo da requisição com os dados <code>name, email, phone, birthdate e password</code></li>

<li><code>PATCH /users/avatar</code> Faz o upload da foto de perfil do usuário passando o arquivo de imagem no parâmetro <code>avatar</code></li>

<li><code>POST /sessions</code> Faz o login do usuário quando informados, no corpo da requisição, o <code>email e password</code></li>

<li><code>POST /password/forgot</code> Faz o envio do e-mail de recuperação de senha para o endereço informado no corpo da requisição (parâmetro <code>email</code>)</li>

<li><code>POST /password/reset</code> Redefine a senha do usuário. No corpo da requisição, deve se enviar o <code>token, password, password_confirmation</code></li>

<li><code>GET /profile</code> Exibe os dados do perfil do usuário <strong>logado</strong></li>

<li><code>PUT /profile</code> Atualiza o perfil do usuário. No corpo da requisição deve-se enviar os campos <code>name, status, phone, birthdate, old_password, password, password_confirmation</code></li>

<li><code>GET /users/followers/:user_id</code> Lista todos os seguidores do usuário informado no parâmetro da requisição (campo <code>user_id</code>)</li>

<hr>

<a href="https://linkedin.com/in/danilo-de-souza-ferreira">
  <h3>
    Acesse meu LinkedIn
  </h3>
</a>