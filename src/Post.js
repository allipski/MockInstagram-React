import React from "react";

export default function Post(props) {
    const [like, setLike] = React.useState("md hydrated");
    const [shape, setShape] = React.useState("heart-outline");
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.usersrc} />
                    {props.username}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img onClick={() =>{ 
                            if (like === "md hydrated") {
                                setLike("red md hydrated");
                                setShape("heart");
                            } else {
                                setLike("md hydrated");
                                setShape("heart-outline");
                            }}} src={props.contentsrc} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name={shape} class={like} onClick={() =>{ 
                            if (like === "md hydrated") {
                                setLike("red md hydrated");
                                setShape("heart");
                            } else {
                                setLike("md hydrated");
                                setShape("heart-outline");
                            }}}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.commentsrc} />
                    <div class="texto">
                        Curtido por <strong>{props.likeuser}</strong> e <strong>{props.likenumber}</strong>
                    </div>
                </div>
            </div>
        </div>
    )
};