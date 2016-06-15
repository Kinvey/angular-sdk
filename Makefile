PROJECT = "Kinvey Angular SDK"

clean: ;@echo "Cleaning ${PROJECT}..."; \
	rm -rf node_modules && rm -rf es5 && rm -rf dist && rm -rf coverage && rm -f test.tap

install: ;@echo "Installing dependencies for ${PROJECT}..."; \
	npm install

build: ;@echo "Building ${PROJECT}..."; \
	./node_modules/.bin/gulp bundle

test: ;@echo "Testing ${PROJECT}..."; \
	npm run test:jenkins

upload: ;@echo "Uploading ${PROJECT} to S3..."; \
	./node_modules/.bin/gulp upload

publish: ;@echo "Publishing ${PROJECT}..."; \
	npm publish .

audit: clean install test
release: audit build upload publish

.PHONY: clean install build test upload publish audit release
