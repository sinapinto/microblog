import React, { useState } from 'react';
import { compose } from 'react-apollo';
import { TiPlus as PlusIcon } from 'react-icons/ti';
import { TiUser as AccountIcon } from 'react-icons/ti';

import { logoutUser } from '../../graphql/mutations/user';
import withCurrentUser from '../../util/withCurrentUser';
import AuthModal from './AuthModal';
import { Button } from '../../components/Button';
import ButtonLink from '../../components/ButtonLink';
import { MODAL_CLOSED, MODAL_SIGNUP } from './constants';
import { StyledNavbar, NavbarContent, LogoLink, ButtonWrap } from './style';

interface Props {
  logoutUser: () => any;
  currentUser: any;
}

function Navbar({ logoutUser, currentUser }: Props) {
  let [activeModal, setActiveModal] = useState(MODAL_CLOSED);
  return (
    <StyledNavbar>
      <NavbarContent>
        <LogoLink to="/">microblog</LogoLink>
        <ButtonWrap>
          {currentUser ? (
            <React.Fragment>
              <ButtonLink to="/create">
                <PlusIcon size={20} />
                Create
              </ButtonLink>
              <ButtonLink to={`/u/${currentUser.username}`}>
                <AccountIcon size={20} />
                {currentUser.username.slice(0, 16)}
              </ButtonLink>
              <Button onClick={() => logoutUser().catch(() => {})}>
                Log Out
              </Button>
            </React.Fragment>
          ) : (
            <Button onClick={() => setActiveModal(MODAL_SIGNUP)}>
              Sign Up
            </Button>
          )}
        </ButtonWrap>
      </NavbarContent>
      <AuthModal
        isOpen={activeModal !== MODAL_CLOSED}
        onRequestClose={() => setActiveModal(MODAL_CLOSED)}
        type={activeModal}
        onChangeType={type => setActiveModal(type)}
        onSuccess={() => setActiveModal(MODAL_CLOSED)}
      />
    </StyledNavbar>
  );
}

export default compose(
  logoutUser,
  withCurrentUser
)(Navbar);
