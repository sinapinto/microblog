import React, { useState } from 'react';
import { Query } from 'react-apollo';
import { MdCreate as CreateIcon } from 'react-icons/md';
import { MdPerson as AccountIcon } from 'react-icons/md';

import AuthModal, { ModalType } from './AuthModal';
import { Button } from '../../components/Button';
import ButtonLink from '../../components/ButtonLink';
import { StyledNavbar, NavbarContent, LogoLink, ButtonWrap } from './style';
import LogoutButton from './LogoutButton';
import { currentUserQuery as QUERY } from '../../graphql/queries/user';
import { CurrentUser } from '../../graphql/queries/__generated__/CurrentUser';

class CurrentUserQuery extends Query<CurrentUser> {}

const Navbar: React.FunctionComponent = () => {
  const [activeModal, setActiveModal] = useState(ModalType.Closed);
  return (
    <CurrentUserQuery query={QUERY} errorPolicy="ignore">
      {({ data, loading }) => {
        return (
          <StyledNavbar>
            <NavbarContent>
              <LogoLink to="/">microblog</LogoLink>
              <ButtonWrap>
                {loading ? null : data &&
                  data.currentUser &&
                  data.currentUser.username ? (
                  <React.Fragment>
                    <ButtonLink to="/create">
                      <CreateIcon size={20} />
                      Create
                    </ButtonLink>
                    <ButtonLink to={`/u/${data.currentUser.username}`}>
                      <AccountIcon size={20} />
                      {data.currentUser.username.slice(0, 16)}
                    </ButtonLink>
                    <LogoutButton />
                  </React.Fragment>
                ) : (
                  <Button
                    type="button"
                    onClick={() => setActiveModal(ModalType.Signup)}
                  >
                    Sign Up
                  </Button>
                )}
              </ButtonWrap>
            </NavbarContent>
            <AuthModal
              isOpen={activeModal !== ModalType.Closed}
              onRequestClose={() => setActiveModal(ModalType.Closed)}
              type={activeModal}
              onChangeType={type => setActiveModal(type)}
              onSuccess={() => setActiveModal(ModalType.Closed)}
            />
          </StyledNavbar>
        );
      }}
    </CurrentUserQuery>
  );
};

export default Navbar;
