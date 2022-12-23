import React from 'react';
import { observer } from 'mobx-react-lite';
import { ResetTradingPasswordModal } from '@deriv/account';
import {
    JurisdictionModal,
    CFDPasswordModal,
    CFDDbviOnBoarding,
    CFDPersonalDetailsModal,
    CFDResetPasswordModal,
    CFDServerErrorDialog,
    CFDTopUpDemoModal,
    MT5TradeModal,
    CFDPasswordManagerModal,
    CompareAccountsModal,
} from '@deriv/cfd';
import MT5AccountTypeModal from './account-type-modal';
import RegulatorsCompareModal from './regulators-compare-modal';
import { useStores } from 'Stores';
import { TOpenAccountTransferMeta } from 'Types';

const ModalManager = () => {
    const store = useStores();
    const { common, client, modules, traders_hub } = store;
    const { is_logged_in, is_eu, is_eu_country, has_active_real_account } = client;
    const { platform } = common;
    const {
        current_list,
        enableCFDPasswordModal,
        is_mt5_trade_modal_visible,
        setAccountType,
        toggleMT5TradeModal,
        togglePasswordManagerModal,
    } = modules.cfd;
    const { is_demo } = traders_hub;

    const openRealPasswordModal = (account_type: TOpenAccountTransferMeta) => {
        setAccountType(account_type);
        enableCFDPasswordModal();
    };

    return (
        <React.Fragment>
            <JurisdictionModal context={store} openPasswordModal={openRealPasswordModal} />
            <CFDPasswordModal context={store} platform={platform} />
            <CFDDbviOnBoarding context={store} />
            <CFDPersonalDetailsModal context={store} />
            <CFDResetPasswordModal context={store} platform={platform} />
            <CFDServerErrorDialog context={store} />
            <CFDTopUpDemoModal context={store} />
            <MT5TradeModal
                context={store}
                current_list={current_list}
                is_open={is_mt5_trade_modal_visible}
                onPasswordManager={togglePasswordManagerModal}
                toggleModal={toggleMT5TradeModal}
                is_eu_user={(is_logged_in && is_eu) || (!is_logged_in && is_eu_country)}
                is_demo={is_demo}
            />
            <CFDPasswordManagerModal context={store} platform={platform} toggleModal={togglePasswordManagerModal} />
            <ResetTradingPasswordModal context={store} />
            <MT5AccountTypeModal />
            <RegulatorsCompareModal />
            <CompareAccountsModal
                context={store}
                is_demo_tab={is_demo}
                openPasswordModal={openRealPasswordModal}
                is_real_enabled={has_active_real_account || !is_demo}
            />
        </React.Fragment>
    );
};

export default observer(ModalManager);
