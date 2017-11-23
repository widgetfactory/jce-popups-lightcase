/**
 * @package   	JCE
 * @copyright 	Copyright (c) 2009-2017 Ryan Demmer. All rights reserved.
 * @license   	GNU/GPL 2 or later - http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 * JCE is free software. This version may have been modified pursuant
 * to the GNU General Public License, and as distributed it includes or
 * is derivative of works licensed under the GNU General Public License or
 * other free or open source software licenses.
 */
(function() {    
    WFPopups.addPopup('lightcase', {
        setup: function() {
            var self = this;
        },
        /**
         * Check if node is a Lightcase popup
         * @param {Object} n Element
         */
        check: function(n) {
            var r = n.getAttribute('data-rel');
            
            return r && r.indexOf("lightcase") === 0;
        },
        /**
         * Clean a link of popup attributes
         * @param {Object} n
         */
        remove: function(n) {
            if (this.check(n)) {
            	n.removeAttribute('data-rel');
            }
        },
        /**
         * Convert parameter string to JSON object
         */
        convertData: function(string) {
            var data = {
            	"collection" 	: "",
            	"slideshow" 	: false 
            };

            var values = string.split(":"), marker = values.shift();
            
            var i = 0;	
            
            $.each(data, function(key, value) {
            	if (values[i]) {
            		data[key] = values[i];
            	}
            	i++;
            });

            return data;
        },
        /**
         * Get popup parameters
         * @param {Object} n Popup node
         */
        getAttributes: function(n) {
            var ed = tinyMCEPopup.editor, args = {}, data = {}, v;

            if (this.check(n)) {
                var title = ed.dom.getAttrib(n, 'title');
                var rel = ed.dom.getAttrib(n, 'data-rel');
                
                data = this.convertData(rel);
                
                $('#lightcase_title').val(title);
            }
            
            $.each(data, function(k, v) {
                var $k = $('#lightcase_' + k.replace('-', '_', 'g'));

                if ($k.is(':checkbox')) {
                    $k.prop('checked', !!v);
                } else {
                    $k.val(v);
                }
            });
            

            $.extend(args, {
                src: ed.dom.getAttrib(n, 'href')
            });

            return args;
        },
        /**
         * Set Popup Attributes
         * @param {Object} n Link Element
         */
        setAttributes: function(n, args) {
            var self = this, ed = tinyMCEPopup.editor;
            
            // cleanup
            this.remove(n);

            var collection  = $('#lightcase_collection').val();
            var slideshow   = $('#lightcase_slideshow').is(':checked');
            var title     	= $('#lightcase_title').val();
            
            // set caption
            if (title) {
                ed.dom.setAttrib(n, 'title', ed.dom.encode(title));
            }
            // set size
            if (width && height) {
                ed.dom.setAttrib(n, 'data-rokbox-size',  width + $('#rokbox_width_unit').val() + ' ' + height + $('#rokbox_height_unit').val());
            }
            // set thumbnail option
            if (thubmnail) {
                ed.dom.setAttrib(n, 'data-rokbox-generate-thumbnail', 1);
            }
            // set album
            if (album) {
                ed.dom.setAttrib(n, 'data-rokbox-album', album);
            }
            
            // set element
            if (element) {
                ed.dom.setAttrib(n, 'data-rokbox-element', element);
            }
            
            // set marker
            ed.dom.setAttrib(n, 'data-rokbox', 1);

            // Set target
            ed.dom.setAttrib(n, 'target', '_blank');

            var title = ed.dom.getAttrib(n, 'title');

            if (!title && caption) {
                // set link title
                ed.dom.setAttrib(n, 'title', caption.split('::')[0]);
            }
        },
        /**
         * Function to call when popup extension selected
         */
        onSelect: function() {
        },
        /**
         * Call function when a file is selected / clicked
         * @param {Object} args Function arguments
         */
        onSelectFile: function(args) {
        }

    });
})();
