import Sideuser from "./Sideuser";
import User from "./User";

export default function Sidebar() {

    const users = [
        {
            userimg: "img/bad.vibes.memes.svg",
            username: "bad.vibes.memes",
            status: "Segue você"
        }, 
        {
            userimg: "img/chibirdart.svg",
            username: "chibidart",
            status: "Segue você"
        },
        {
            userimg: "img/razoesparaacreditar.svg",
            username: "razoesparaacreditar",
            status: "Novo no Instagram"
        },
        {
            userimg: "img/adorable_animals.svg",
            username: "adorable_animals",
            status: "Segue você"
        },
        {
            userimg: "img/smallcutecats.svg",
            username: "smallcutecats",
            status: "Segue você"
        }
    ]

    const userone = 
        {
            src: "img/catanacomics.svg",
            username: "catanacomics",
            name: "Catana"
        }
    

    return (
        <div class="sidebar">
          <User src={userone.src} username={userone.username} name={userone.name}/>

          <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>

            {users.map(user => <Sideuser userimg={user.userimg} username={user.username} status={user.status}/>)}

          </div>

          <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>

          <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
          </div>
        </div>
    );
}