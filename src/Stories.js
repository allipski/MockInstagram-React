import Story from "./Story";

const stories = [
    {
        src: "img/9gag.svg",
        user: "9gag"
    }, 
    {
        src: "img/meowed.svg",
        user: "meowed"
    },
    {
        src: "img/barked.svg",
        user: "barked"
    },
    {
        src: "img/nathanwpylestrangeplanet.svg",
        user: "nathanwpylestrangeplanet"
    },
    {
        src: "img/wawawicomics.svg",
        user: "wawawicomics"
    },
    {
        src: "img/respondeai.svg",
        user: "respondeai"
    },
    {
        src: "img/filomoderna.svg",
        user: "filomoderna"
    },
    {
        src: "img/memeriagourmet.svg",
        user: "memeriagourmet"
    }
]

export default function Stories() {
    return (
        <div class="stories">
            {stories.map(story => <Story src={story.src} user={story.user} />)}

            <div class="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
          </div>
    );
}