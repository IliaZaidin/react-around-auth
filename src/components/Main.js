import { useContext, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

import Card from './Card';
import api from '../utils/api';

function Main(props) {
  const {
    setCurrentUser,
    onEditProfileClick,
    onAddPlaceClick,
    onEditAvatarClick,
    onCardClick,
    updateCardData,
    cards,
    setCards,
    onCardLike,
    onCardDeleteClick
  } = props;

  const currentUserContext = useContext(CurrentUserContext);

  useEffect(() => {
    api.getUserData()
      .then(data => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log("Error: ", err.status, err.statusText);
      });

    api.getCards()
      .then(data => {
        setCards(data);
      })
      .catch((err) => {
        console.log("Error: ", err.status, err.statusText);
      });
  }, []);

  return (
    <main>
      <section className="profile"> Profile
        <span className="profile__picture-edit" >
          <img className="profile__picture" src={currentUserContext.avatar} alt="nothing to show" onClick={onEditAvatarClick} />
        </span>
        <button className="profile__edit-button" type="button" onClick={onEditProfileClick} />
        <button className="profile__add-button" type="button" onClick={onAddPlaceClick}>+</button>
        <h1 className="profile__title">{currentUserContext.name}</h1>
        <p className="profile__subtitle">{currentUserContext.about}</p>
      </section>
      <section className="picture-grid">
        {
          cards.map((element) => (
            <Card
              key={element._id}
              card={element}
              onClick={onCardClick}
              updateCardData={updateCardData}
              onCardLike={onCardLike}
              onCardDeleteClick={onCardDeleteClick}
            />
          ))
        }
      </section>
    </main>
  );
}

export default Main;