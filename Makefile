.PHONY: publish start
PUBLISH_DATE?=2021-11-27

publish:
	DATE=$(PUBLISH_DATE) ./publish.sh

start:
	DATE=$(PUBLISH_DATE) ./start.sh

