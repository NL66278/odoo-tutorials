{
    "name": "Awesome Shirt",
    "summary": """
        Short (1 phrase/line) summary of the module's purpose, used as
        subtitle on modules listing or apps.openerp.com""",
    "author": "Odoo",
    "website": "https://www.odoo.com/",
    "license": "AGPL-3",
    "category": "Productivity",
    "version": "16.0.0.1.0",
    "application": True,
    "installable": True,
    # any module necessary for this one to work correctly
    "depends": ["base", "web", "mail", "awesome_gallery"],
    # always loaded
    "data": [
        "security/ir.model.access.csv",
        "views/views.xml",
        "views/templates.xml",
    ],
    # only loaded in demonstration mode
    "demo": [
        "demo/demo.xml",
    ],
    "assets": {
        "web.assets_backend": [
            "awesome_tshirt/static/src/**/*",
        ],
    },
}
