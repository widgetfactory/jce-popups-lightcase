<?php
/**
 * @package       JCE
 * @copyright     Copyright (c) 2009-2017 Ryan Demmer. All rights reserved.
 * @license       GNU/GPL 2 or later - http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 * JCE is free software. This version may have been modified pursuant
 * to the GNU General Public License, and as distributed it includes or
 * is derivative of works licensed under the GNU General Public License or
 * other free or open source software licenses.
 */
defined('_WF_EXT') or die('RESTRICTED');
?>
    <div class="uk-form-row">
        <label for="lightcase_title" class="uk-form-label uk-width-1-5 hastip" title="<?php echo WFText::_('WF_POPUPS_LIGHTCASE_OPTION_TITLE_DESC'); ?>">
            <?php echo WFText::_('WF_POPUPS_LIGHTCASE_OPTION_TITLE'); ?>
        </label>
        <div class="uk-form-controls uk-width-4-5">
            <input id="lightcase_title" type="text" class="text" value="" />
        </div>
    </div>
    <div class="uk-form-row">
        <label for="lightcase_collection" class="uk-form-label uk-width-1-5 hastip" title="<?php echo WFText::_('WF_POPUPS_LIGHTCASE_OPTION_COLLECTION_DESC'); ?>">
            <?php echo WFText::_('WF_POPUPS_LIGHTCASE_OPTION_COLLECTION'); ?>
        </label>
        <div class="uk-form-controls uk-width-4-5">
            <input id="lightcase_collection" type="text" value="" />
        </div>
    </div>

    <div class="uk-form-row">
        <label for="lightcase_slideshow" class="hastip uk-form-label uk-width-1-5" title="<?php echo WFText::_('WF_POPUPS_LIGHTCASE_OPTION_SLIDESHOW_DESC'); ?>">
            <?php echo WFText::_('WF_POPUPS_LIGHTCASE_OPTION_SLIDESHOW'); ?>
        </label>
        <div class="uk-form-controls uk-width-4-5">
            <input id="lightcase_slideshow" type="checkbox" />
        </div>
    </div>

    <div class="uk-form-row">
        <label for="lightcase_options" class="uk-form-label uk-width-1-5 hastip" title="<?php echo WFText::_('WF_POPUPS_LIGHTCASE_OPTIONS_DESC'); ?>">
            <?php echo WFText::_('WF_POPUPS_LIGHTCASE_OPTIONS'); ?>
        </label>
        <div class="uk-width-4-5" id="lightcase_options">
            <div class="uk-form-row uk-repeatable">
                <div class="uk-form-controls uk-grid uk-grid-small uk-width-9-10">
                    <label class="uk-form-label uk-width-1-10">
                        <?php echo WFText::_('WF_LABEL_NAME'); ?>
                    </label>
                    <div class="uk-form-controls uk-width-4-10">
                        <input type="text" name="lightcase_options_name[]" />
                    </div>
                    <label class="uk-form-label uk-width-1-10">
                        <?php echo WFText::_('WF_LABEL_VALUE'); ?>
                    </label>
                    <div class="uk-form-controls uk-width-4-10">
                        <input type="text" name="lightcase_options_value[]" />
                    </div>
                </div>
                <div class="uk-form-controls uk-width-1-10 uk-margin-small-left">
                    <button type="button" class="uk-button uk-button-link uk-repeatable-create">
                        <i class="uk-icon-plus"></i>
                    </button>
                    <button type="button" class="uk-button uk-button-link uk-repeatable-delete">
                        <i class="uk-icon-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
