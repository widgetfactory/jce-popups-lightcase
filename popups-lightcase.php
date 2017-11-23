<?php
/**
 * @package   	JCE
 * @copyright 	Copyright (c) 2009-2017 Ryan Demmer. All rights reserved.
 * @license   	GNU/GPL 2 or later - http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 * JCE is free software. This version may have been modified pursuant
 * to the GNU General Public License, and as distributed it includes or
 * is derivative of works licensed under the GNU General Public License or
 * other free or open source software licenses.
 */
defined('_WF_EXT') or die('RESTRICTED');

class WFPopupsExtension_Lightcase extends JObject {

    /**
     * Constructor activating the default information of the class
     *
     * @access	protected
     */
    public function __construct($options = array()) {
        if (self::isEnabled()) {
            $scripts = array();

            $document = WFDocument::getInstance();
            $document->addScript('plugins/jce/popups-lightcase/js/lightcase.js', 'joomla');
        }
    }

    public function getParams() {
        return array();
    }

    public function isEnabled() {
        $wf = WFEditorPlugin::getInstance();

        if (JPluginHelper::isEnabled('system', 'lightcase') && $wf->getParam('popups.lightcase.enable', 1) == 1) {
            return true;
        }

        return false;
    }
}

?>