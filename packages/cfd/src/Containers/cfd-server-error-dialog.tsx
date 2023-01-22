import React from 'react';
import { Dialog } from '@deriv/components';
import { localize, Localize } from '@deriv/translations';

type CFDServerErrorDialogProps = {
    context: Record<string, any>;
};

const CFDServerErrorDialog = ({ context }: CFDServerErrorDialogProps) => {
    const { ui, modules } = context;
    const { enableApp, disableApp } = ui;
    const { cfd } = modules;
    const { clearCFDError, error_message, error_type, has_cfd_error, is_cfd_success_dialog_enabled } = cfd;

    const should_show_error =
        has_cfd_error &&
        !is_cfd_success_dialog_enabled &&
        error_type &&
        !['PasswordReset', 'PasswordError'].includes(error_type);

    return (
        <Dialog
            title={localize('Something’s not right')}
            confirm_button_text={localize('OK')}
            onConfirm={clearCFDError}
            disableApp={disableApp}
            enableApp={enableApp}
            is_visible={should_show_error}
        >
            {error_message || <Localize i18n_default_text='Sorry, an error occured while processing your request.' />}
        </Dialog>
    );
};

export default CFDServerErrorDialog;
