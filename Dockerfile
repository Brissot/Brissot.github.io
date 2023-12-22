# We are starting from the NGINX base image
FROM nginx

# This is the folder where the image looks for a website by default
COPY ./index.html /usr/share/nginx/html/

# Note: if you have spaces in your file names, you will need:
# quotation marks and brackets
COPY ["./Sid Su Resume.pdf", "/usr/share/nginx/html/"]

