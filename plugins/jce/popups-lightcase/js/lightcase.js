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

            var options = ed.dom.getAttrib(n, 'data-lc-options');

            if (options) {
                options = options.replace(/[']+/g, '"');

                var json = {};

                try {
                    json = JSON.parse(options);
                } catch(e) {}

                var x = 0;

                $.each(json, function(k, v) {
                    if (v !== "") {
                        try {
                            v = decodeURIComponent(v);
                        } catch (e) {}
        
                        var n = $('.uk-repeatable', '#lightcase_options').eq(0);
        
                        if (x > 0) {
                            $(n).clone(true).appendTo($(n).parent());
                        }
        
                        var elements = $('.uk-repeatable', '#lightcase_options').eq(x).find('input, select');
        
                        $(elements).eq(0).val(k);
                        $(elements).eq(1).val(v);
                    }

                    x++;
                });
            }

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
            
            var values = ["lightcase"];

            var collection  = $('#lightcase_collection').val();
            var slideshow   = $('#lightcase_slideshow').is(':checked');
            var title     	= $('#lightcase_title').val();
            
            // set caption
            if (title) {
                ed.dom.setAttrib(n, 'title', ed.dom.encode(title));
            }
            
            // set collection
            if (collection) {
                values.push(collection);
            }

            // set slideshow option
            if (slideshow) {
                values.push('slideshow');
            }
            
            // set marker
            ed.dom.setAttrib(n, 'data-rel', values.join(":"));

            var data = {};

            $('.uk-repeatable', '#lightcase_options').each(function() {
                var k = $('input[name^="lightcase_options_name"]', this).val();
                var v = $('input[name^="lightcase_options_value"]', this).val();
    
                if (k !== '' && v !== '') {
                    
                    if (!/\D/.test(v)) {
                        v = parseInt(v);
                    }
                    
                    data[k] = v;
                }
            });

            var json = JSON.stringify(data);

            if (json) {
                json = json.replace(/["]+/g, "'");
                ed.dom.setAttrib(n, 'data-lc-options', json);
            }

            // Set target
            ed.dom.setAttrib(n, 'target', '_blank');
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
