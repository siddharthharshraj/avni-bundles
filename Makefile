recopy:
	rm -rf csj-uat/*
	rm -rf apf/*
	rm -rf goonj/*
	cp -r ~/Downloads/csj-uat/* csj-uat/
	cp -r ~/Downloads/apf/* apf/
	cp -r ~/Downloads/goonj/* goonj/

transform-csj:
	node tools/transform-bundle-to-js.js csj-uat

copy-sample:
	cp csj-uat/subjectTypes.js subjectTypes.js

deps:
	npm install

clean:
	rm -rf node_modules

transform-bundle:
ifndef bundle
	@echo "Please provide bundle param"
	exit 1
else
	node tools/transform-bundle-to-js.js development/$(bundle)
endif
