# Add custom configuration
FROM ibmcom/mq:latest AS mq-dev-server
COPY config.mqsc /etc/mqm/
ENTRYPOINT ["runmqdevserver"]
