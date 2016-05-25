PROJECT = "Kinvey PhoneGap SDK"

clean: ;@echo "Cleaning ${PROJECT}..."; \
	rm -rf node_modules

install: ;@echo "Installing dependencies for ${PROJECT}..."; \
	npm install

test: ;@echo "Testing ${PROJECT}..."; \
	npm run test:jenkins

build: ;@echo "Releasing ${PROJECT}..."; \
	./node_modules/.bin/gulp default
	git add es5/\*.js
	git commit -m "Update es5 and dist files."

upload: ;@echo "Uploading ${PROJECT} to S3..."; \
	./node_modules/.bin/gulp uploadS3

publish: ;@echo "Publishing ${PROJECT}..."; \
	npm install ci-npm-publish
	npm publish --npmuser ${NPMUSER} --npmemail ${NPMEMAIL} --npmpassword ${NPMPASSWORD}

audit: clean install test
release: audit build upload publish

.PHONY: clean install test build upload publish audit release
