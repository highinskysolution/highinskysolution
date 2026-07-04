import http.server
import socketserver
import webbrowser
import socket
import sys
import os

def find_free_port(start_port=8000):
    for port in range(start_port, start_port + 100):
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            try:
                s.bind(('127.0.0.1', port))
                return port
            except OSError:
                continue
    return None

def main():
    # Change working directory to the script's directory
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    port = find_free_port()
    if not port:
        print("Error: Could not find an available network port.")
        input("Press Enter to exit...")
        sys.exit(1)
        
    handler = http.server.SimpleHTTPRequestHandler
    
    # Enable address reuse
    socketserver.TCPServer.allow_reuse_address = True
    
    try:
        # Use 127.0.0.1 explicitly to prevent binding issues on localhost config
        with socketserver.TCPServer(('127.0.0.1', port), handler) as httpd:
            url = f"http://127.0.0.1:{port}/contact.html"
            print("==================================================")
            print("  HIGH IN SKY SOLUTIONS - Local Web Server")
            print("==================================================")
            print(f"  Server URL:  http://127.0.0.1:{port}/")
            print(f"  Opening:     {url}")
            print("==================================================")
            print("  [KEEP THIS WINDOW OPEN WHILE TESTING]")
            print("  Press Ctrl+C inside this window to stop server.")
            print("==================================================")
            
            # Open default browser automatically
            webbrowser.open(url)
            
            # Start serving
            httpd.serve_forever()
    except Exception as e:
        print(f"Error starting server: {e}")
        input("Press Enter to exit...")

if __name__ == "__main__":
    main()
