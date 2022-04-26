import { render, screen, expect } from "@testing-library/react"
import Header from "./components/layout/Header";

const user = {
    id: 1,
    created_at: '2021-12-13T00:17:29+00:00',
    name: 'Vonta',
    avatar: 'https://thumbs.gfycat.com/NiceRequiredGrunion-size_restricted.gif',
    header: 'https://static.wikia.nocookie.net/naruto/images/5/50/Team_Kakashi.png',
    likes: ['React', 'Anime', 'Traveling', 'Living', 'Tower Defense Games', 'Card Games'],
    motto: 'Res Non Verba',
    color: 'crimson',
  }

describe('Header', () => {
  it('Should display header properly', () => {
    render(
      <Header user={user}/>
    );

    screen.getByRole('img'); // check for header image

    screen.getByText('Vonta'); // check for user name in header
    
  });
})
