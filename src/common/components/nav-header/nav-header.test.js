import React from 'react';
import renderer from 'react-test-renderer';
import {NavHeader} from './nav-header';
import { shallow } from 'enzyme';
describe('Nav-Header Component:', () => {
    let componentInstance;
    beforeEach(() => {
        componentInstance = shallow(<NavHeader/>).dive();
    });
    describe('Layout:', () => {
        it('should render a component', () => {
            expect(componentInstance.length).toEqual(1);
        });
        it('should have navbar as a container for links', () => {
            expect(componentInstance.find('Navbar')).toBeTruthy();
        });
        it('should have link to profile/repositories', () => {
            expect(componentInstance.find('#repositoryLink').length).toEqual(1);
        });
        
    });
});