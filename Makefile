component = ./node_modules/component-hooks/node_modules/.bin/component

default: node_modules components public

node_modules:
	@npm install

components:
	@$(component) install

public: lib/index.js lib/style.css
	@$(component) build -n $@ -o $@

example: default
	@xdg-open example/index.html

clean:
	@rm -rf public

.PHONY: clean example