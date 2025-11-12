/**
 * Gabufront v0.2.0
 * Framework CSS/JS moderno y ligero
 * (c) 2024 Michael Gabu
 * MIT License
 */

(function(window, document) {
    'use strict';

    // Objeto principal Gabufront
    const Gabufront = {
        version: '0.2.0'
    };

    /**
     * ===================
     * UTILIDADES
     * ===================
     */
    const Utils = {
        // Añadir event listener con soporte para NodeList
        on: function(selector, event, handler, useCapture = false) {
            if (typeof selector === 'string') {
                const elements = document.querySelectorAll(selector);
                elements.forEach(el => el.addEventListener(event, handler, useCapture));
            } else if (selector instanceof NodeList) {
                selector.forEach(el => el.addEventListener(event, handler, useCapture));
            } else if (selector instanceof Element) {
                selector.addEventListener(event, handler, useCapture);
            }
        },

        // Remover event listener
        off: function(selector, event, handler, useCapture = false) {
            if (typeof selector === 'string') {
                const elements = document.querySelectorAll(selector);
                elements.forEach(el => el.removeEventListener(event, handler, useCapture));
            } else if (selector instanceof NodeList) {
                selector.forEach(el => el.removeEventListener(event, handler, useCapture));
            } else if (selector instanceof Element) {
                selector.removeEventListener(event, handler, useCapture);
            }
        },

        // Agregar/remover clases
        addClass: function(element, className) {
            if (element) element.classList.add(className);
        },

        removeClass: function(element, className) {
            if (element) element.classList.remove(className);
        },

        toggleClass: function(element, className) {
            if (element) element.classList.toggle(className);
        },

        hasClass: function(element, className) {
            return element ? element.classList.contains(className) : false;
        }
    };

    /**
     * ===================
     * MODALES
     * ===================
     */
    Gabufront.Modal = {
        init: function(options = {}) {
            const defaults = {
                dismissible: true,
                opacity: 0.5,
                inDuration: 250,
                outDuration: 250
            };
            const settings = Object.assign({}, defaults, options);

            // Crear overlay si no existe
            if (!document.querySelector('.modal-overlay')) {
                const overlay = document.createElement('div');
                overlay.className = 'modal-overlay';
                overlay.style.opacity = '0';
                overlay.style.display = 'none';
                document.body.appendChild(overlay);

                if (settings.dismissible) {
                    overlay.addEventListener('click', () => {
                        this.closeAll();
                    });
                }
            }

            // Inicializar botones que abren modales
            const triggers = document.querySelectorAll('[data-target]');
            triggers.forEach(trigger => {
                const targetId = trigger.getAttribute('data-target');
                trigger.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.open(targetId, settings);
                });
            });

            // Inicializar botones de cerrar
            const closeButtons = document.querySelectorAll('.modal-close');
            closeButtons.forEach(button => {
                button.addEventListener('click', (e) => {
                    e.preventDefault();
                    const modal = button.closest('.modal');
                    if (modal) {
                        this.close(modal.id);
                    }
                });
            });

            // Cerrar con ESC
            if (settings.dismissible) {
                document.addEventListener('keydown', (e) => {
                    if (e.key === 'Escape') {
                        this.closeAll();
                    }
                });
            }
        },

        open: function(modalId, settings = {}) {
            const modal = document.getElementById(modalId);
            const overlay = document.querySelector('.modal-overlay');

            if (modal && overlay) {
                // Mostrar overlay
                overlay.style.display = 'block';
                setTimeout(() => {
                    overlay.style.opacity = settings.opacity || '0.5';
                }, 10);

                // Mostrar modal
                modal.style.display = 'block';
                Utils.addClass(modal, 'open');
                setTimeout(() => {
                    modal.style.opacity = '1';
                    modal.style.transform = 'scaleX(1) scaleY(1)';
                }, 10);

                // Prevenir scroll del body
                document.body.style.overflow = 'hidden';
            }
        },

        close: function(modalId) {
            const modal = document.getElementById(modalId);
            const overlay = document.querySelector('.modal-overlay');

            if (modal) {
                modal.style.opacity = '0';
                modal.style.transform = 'scaleX(0.7) scaleY(0.7)';

                setTimeout(() => {
                    modal.style.display = 'none';
                    Utils.removeClass(modal, 'open');

                    // Ocultar overlay si no hay más modales abiertos
                    const openModals = document.querySelectorAll('.modal.open');
                    if (openModals.length === 0 && overlay) {
                        overlay.style.opacity = '0';
                        setTimeout(() => {
                            overlay.style.display = 'none';
                        }, 250);
                        document.body.style.overflow = '';
                    }
                }, 250);
            }
        },

        closeAll: function() {
            const openModals = document.querySelectorAll('.modal.open');
            openModals.forEach(modal => {
                this.close(modal.id);
            });
        }
    };

    /**
     * ===================
     * TABS
     * ===================
     */
    Gabufront.Tabs = {
        init: function() {
            const tabContainers = document.querySelectorAll('.tabs');

            tabContainers.forEach(container => {
                const tabs = container.querySelectorAll('.tab a');

                tabs.forEach(tab => {
                    tab.addEventListener('click', (e) => {
                        e.preventDefault();
                        const targetId = tab.getAttribute('href');

                        // Remover active de todos los tabs
                        tabs.forEach(t => Utils.removeClass(t, 'active'));

                        // Agregar active al tab clickeado
                        Utils.addClass(tab, 'active');

                        // Ocultar todos los contenidos
                        const contents = document.querySelectorAll('.tab-content');
                        contents.forEach(content => {
                            Utils.removeClass(content, 'active');
                            content.style.display = 'none';
                        });

                        // Mostrar contenido del tab activo
                        const targetContent = document.querySelector(targetId);
                        if (targetContent) {
                            targetContent.style.display = 'block';
                            setTimeout(() => {
                                Utils.addClass(targetContent, 'active');
                            }, 10);
                        }

                        // Mover indicador si existe
                        const indicator = container.querySelector('.indicator');
                        if (indicator) {
                            const tabElement = tab.parentElement;
                            indicator.style.left = tabElement.offsetLeft + 'px';
                            indicator.style.width = tabElement.offsetWidth + 'px';
                        }
                    });
                });

                // Posicionar indicador inicial
                const activeTab = container.querySelector('.tab a.active');
                const indicator = container.querySelector('.indicator');
                if (activeTab && indicator) {
                    const tabElement = activeTab.parentElement;
                    indicator.style.left = tabElement.offsetLeft + 'px';
                    indicator.style.width = tabElement.offsetWidth + 'px';
                }
            });
        }
    };

    /**
     * ===================
     * COLLAPSIBLE (Acordeón)
     * ===================
     */
    Gabufront.Collapsible = {
        init: function(options = {}) {
            const defaults = {
                accordion: true // Solo un item abierto a la vez
            };
            const settings = Object.assign({}, defaults, options);

            const collapsibles = document.querySelectorAll('.collapsible');

            collapsibles.forEach(collapsible => {
                const headers = collapsible.querySelectorAll('.collapsible-header');

                headers.forEach(header => {
                    header.addEventListener('click', function() {
                        const listItem = this.parentElement;
                        const body = listItem.querySelector('.collapsible-body');
                        const isActive = Utils.hasClass(listItem, 'active');

                        // Si es accordion, cerrar otros items
                        if (settings.accordion && !isActive) {
                            const activeItems = collapsible.querySelectorAll('li.active');
                            activeItems.forEach(item => {
                                const itemBody = item.querySelector('.collapsible-body');
                                Utils.removeClass(item, 'active');
                                if (itemBody) {
                                    itemBody.style.maxHeight = '0';
                                }
                            });
                        }

                        // Toggle item actual
                        if (isActive) {
                            Utils.removeClass(listItem, 'active');
                            body.style.maxHeight = '0';
                        } else {
                            Utils.addClass(listItem, 'active');
                            body.style.maxHeight = body.scrollHeight + 'px';
                        }
                    });
                });
            });
        }
    };

    /**
     * ===================
     * DROPDOWN
     * ===================
     */
    Gabufront.Dropdown = {
        init: function(options = {}) {
            const defaults = {
                constrainWidth: true,
                hover: false,
                alignment: 'left'
            };
            const settings = Object.assign({}, defaults, options);

            const dropdownButtons = document.querySelectorAll('.dropdown-button');

            dropdownButtons.forEach(button => {
                const targetId = button.getAttribute('data-target');
                const dropdown = document.getElementById(targetId);

                if (!dropdown) return;

                // Posicionar dropdown
                dropdown.style.position = 'absolute';
                dropdown.style.display = 'none';
                dropdown.style.opacity = '0';

                const toggleDropdown = (show) => {
                    if (show) {
                        // Posicionar dropdown
                        const rect = button.getBoundingClientRect();
                        dropdown.style.top = (rect.bottom + window.scrollY) + 'px';

                        if (settings.alignment === 'right') {
                            dropdown.style.right = (window.innerWidth - rect.right) + 'px';
                        } else {
                            dropdown.style.left = rect.left + 'px';
                        }

                        if (settings.constrainWidth) {
                            dropdown.style.width = rect.width + 'px';
                        }

                        dropdown.style.display = 'block';
                        setTimeout(() => {
                            dropdown.style.opacity = '1';
                        }, 10);
                    } else {
                        dropdown.style.opacity = '0';
                        setTimeout(() => {
                            dropdown.style.display = 'none';
                        }, 200);
                    }
                };

                // Click event
                button.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    const isOpen = dropdown.style.display === 'block';
                    toggleDropdown(!isOpen);
                });

                // Hover events si está habilitado
                if (settings.hover) {
                    button.addEventListener('mouseenter', () => toggleDropdown(true));
                    button.addEventListener('mouseleave', () => {
                        setTimeout(() => {
                            if (!dropdown.matches(':hover')) {
                                toggleDropdown(false);
                            }
                        }, 100);
                    });

                    dropdown.addEventListener('mouseleave', () => toggleDropdown(false));
                }

                // Cerrar al hacer click en un item
                const items = dropdown.querySelectorAll('li a');
                items.forEach(item => {
                    item.addEventListener('click', () => {
                        toggleDropdown(false);
                    });
                });
            });

            // Cerrar dropdowns al hacer click fuera
            document.addEventListener('click', () => {
                const dropdowns = document.querySelectorAll('.dropdown-content');
                dropdowns.forEach(dropdown => {
                    dropdown.style.opacity = '0';
                    setTimeout(() => {
                        dropdown.style.display = 'none';
                    }, 200);
                });
            });
        }
    };

    /**
     * ===================
     * TOOLTIPS
     * ===================
     */
    Gabufront.Tooltip = {
        init: function(options = {}) {
            const defaults = {
                delay: 0,
                position: 'bottom'
            };
            const settings = Object.assign({}, defaults, options);

            const elements = document.querySelectorAll('[data-tooltip]');

            elements.forEach(element => {
                let tooltip = null;
                let timeout = null;

                element.addEventListener('mouseenter', function() {
                    timeout = setTimeout(() => {
                        const text = this.getAttribute('data-tooltip');
                        const position = this.getAttribute('data-position') || settings.position;

                        // Crear tooltip
                        tooltip = document.createElement('div');
                        tooltip.className = 'tooltip';
                        tooltip.textContent = text;
                        tooltip.style.position = 'absolute';
                        tooltip.style.opacity = '0';
                        document.body.appendChild(tooltip);

                        // Posicionar tooltip
                        const rect = this.getBoundingClientRect();
                        const tooltipRect = tooltip.getBoundingClientRect();

                        switch(position) {
                            case 'top':
                                tooltip.style.top = (rect.top + window.scrollY - tooltipRect.height - 5) + 'px';
                                tooltip.style.left = (rect.left + rect.width / 2 - tooltipRect.width / 2) + 'px';
                                break;
                            case 'bottom':
                                tooltip.style.top = (rect.bottom + window.scrollY + 5) + 'px';
                                tooltip.style.left = (rect.left + rect.width / 2 - tooltipRect.width / 2) + 'px';
                                break;
                            case 'left':
                                tooltip.style.top = (rect.top + rect.height / 2 - tooltipRect.height / 2) + 'px';
                                tooltip.style.left = (rect.left - tooltipRect.width - 5) + 'px';
                                break;
                            case 'right':
                                tooltip.style.top = (rect.top + rect.height / 2 - tooltipRect.height / 2) + 'px';
                                tooltip.style.left = (rect.right + 5) + 'px';
                                break;
                        }

                        // Mostrar tooltip
                        setTimeout(() => {
                            tooltip.style.opacity = '1';
                        }, 10);
                    }, settings.delay);
                });

                element.addEventListener('mouseleave', function() {
                    if (timeout) clearTimeout(timeout);
                    if (tooltip) {
                        tooltip.style.opacity = '0';
                        setTimeout(() => {
                            if (tooltip && tooltip.parentNode) {
                                tooltip.parentNode.removeChild(tooltip);
                            }
                            tooltip = null;
                        }, 200);
                    }
                });
            });
        }
    };

    /**
     * ===================
     * CHIPS
     * ===================
     */
    Gabufront.Chips = {
        init: function() {
            const chips = document.querySelectorAll('.chip');

            chips.forEach(chip => {
                const closeIcon = chip.querySelector('.material-icons');
                if (closeIcon) {
                    closeIcon.addEventListener('click', function(e) {
                        e.stopPropagation();
                        chip.style.opacity = '0';
                        chip.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            chip.remove();
                        }, 200);
                    });
                }
            });
        }
    };

    /**
     * ===================
     * AUTO-INICIALIZACIÓN
     * ===================
     */
    Gabufront.autoInit = function() {
        // Inicializar componentes automáticamente si existen en el DOM
        if (document.querySelectorAll('.modal').length > 0) {
            this.Modal.init();
        }
        if (document.querySelectorAll('.tabs').length > 0) {
            this.Tabs.init();
        }
        if (document.querySelectorAll('.collapsible').length > 0) {
            this.Collapsible.init();
        }
        if (document.querySelectorAll('.dropdown-button').length > 0) {
            this.Dropdown.init();
        }
        if (document.querySelectorAll('[data-tooltip]').length > 0) {
            this.Tooltip.init();
        }
        if (document.querySelectorAll('.chip').length > 0) {
            this.Chips.init();
        }
    };

    // Auto-inicializar cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => Gabufront.autoInit());
    } else {
        Gabufront.autoInit();
    }

    // Exportar Gabufront al objeto global
    window.Gabufront = Gabufront;

})(window, document);
