/** @format */

/**
 * External dependencies
 */
import React from 'react';
import { shallow } from 'enzyme';

/**
 * Internal dependencies
 */
import { PendingListItem } from '../pending-list-item';

describe( 'PendingListItem', () => {
	const defaultProps = {
		translate: x => x,
		productName: 'WordPress.com Business Plan',
		paymentType: 'Soforte',
		totalCostDisplay: '$204',
		completePaymentUrl: 'https://complete',
	};

	const wrapper = shallow( <PendingListItem { ...defaultProps } /> );

	console.log( wrapper.debug() );

	const rules = [
		'Card.pending-payments__list-item .pending-payments__list-item-wrapper .pending-payments__list-item-details',
		'.pending-payments__list-item-details .pending-payments__list-item-title',
		'.pending-payments__list-item-details .pending-payments__list-item-purchase-type',
		'.pending-payments__list-item-details .pending-payments__list-item-purchase-date',
		'.pending-payments__list-item-details .pending-payments__list-item-actions',
		'.pending-payments__list-item-actions Button[href="/help/contact"][isPrimary=false]',
		'Button[href="/help/contact"] [icon="help"]',
		'.pending-payments__list-item-actions Button[href="https://complete"][isPrimary=true]',
	];

	rules.forEach( rule => {
		test( rule, () => {
			expect( wrapper.find( rule ) ).toHaveLength( 1 );
		} );
	} );

	// todo: Add tests for actions
} );
