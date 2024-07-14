using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;
using System.Diagnostics;
using System.Runtime.InteropServices;
using Microsoft.Win32;
using static System.Windows.Forms.VisualStyles.VisualStyleElement;
using idmPub_killer.Properties;

namespace idmPub_killer
{
    public partial class Form1 : Form
    {
        private NotifyIcon notifyIcon;
        private const int WM_CLOSE = 0x0010;

        [DllImport("user32.dll")]
        private static extern bool SendMessage(IntPtr hWnd, int Msg, IntPtr wParam, IntPtr lParam);

        [DllImport("user32.dll", CharSet = CharSet.Auto, SetLastError = true)]
        private static extern int GetWindowText(IntPtr hWnd, StringBuilder lpString, int nMaxCount);
        private static readonly string StartupKey = "SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run";
        private static readonly string StartupValue = "IDM pub Killer";

        public Form1()
        {
            
            InitializeComponent();
            
            InitializeSystemTrayIcon();
        }
        String appName = "IDMan";
        string tapname = "";
        private void Form1_Load(object sender, EventArgs e)
        {
            timer1.Interval = 250;
            timer1.Tick += Timer_Tick;
            timer1.Start();
            if (CheckStartupKeyValue())
            {
                checkBox1.Checked = true;
            }
            else checkBox1.Checked = false;

        }

        private void Timer_Tick(object sender, EventArgs e)
        {
            string currentProcessName = Process.GetCurrentProcess().ProcessName;


            if (IsProcessRunning(appName))
            {

                CloseNotepadWindow(tapname);
                ///
            }
        } 
        
        private bool IsProcessRunning(string processName)
        {
            
            Process[] processes = Process.GetProcessesByName(processName);

            
            return processes.Length > 0;
        }


        private void CloseNotepadWindow(string windowTitle)
        {
           
            Process[] processes = Process.GetProcessesByName(appName);

            
            foreach (var process in processes)
            {
                try
                {
                    IntPtr handle = process.MainWindowHandle;
                    if (handle != IntPtr.Zero)
                    {
                       
                        StringBuilder title = new StringBuilder(256);
                        GetWindowText(handle, title, title.Capacity);

                        if (title.ToString() == windowTitle)
                        {
                            SendMessage(handle, WM_CLOSE, IntPtr.Zero, IntPtr.Zero);
                        }
                    }
                }
                catch (Exception ex)
                {
                }
            }
        }
        
        private bool CheckStartupKeyValue()
        {
            using (RegistryKey key = Registry.CurrentUser.OpenSubKey(StartupKey))
            {
                if (key == null)
                {
                    return false; 
                }

                object value = key.GetValue(StartupValue);

                return value != null; 
            }
        }
        private void button1_Click(object sender, EventArgs e)
        {
            RegistryKey key = Registry.CurrentUser.OpenSubKey(StartupKey, true);
            
            if (checkBox1.Checked)
            {
                
               
                    key.SetValue(StartupValue, Application.ExecutablePath.ToString());
                    MessageBox.Show("app is now run on startup", "Information", MessageBoxButtons.OK, MessageBoxIcon.Information);
                
                
                key.Close();
            }
            else
            {
                key.DeleteValue(StartupValue, false);
                MessageBox.Show("app is doesnt run on startup", "Information", MessageBoxButtons.OK, MessageBoxIcon.Information);
                key.Close();
            }
        }

        private void Form1_FormClosing(object sender, FormClosingEventArgs e)
        {
            e.Cancel = true;

            this.Hide();
        }
        private void ShowForm()
        {
            this.Show();
            this.WindowState = FormWindowState.Normal;
        }
        private void InitializeSystemTrayIcon()
        {
            notifyIcon = new NotifyIcon();
            notifyIcon.Icon = Resources.icons8_internet_download_manager_48; // Set the icon from resources
            notifyIcon.Visible = true;

            // Handle double-clicks on the tray icon
            notifyIcon.DoubleClick += (sender, e) => ShowForm();
        }

    }
}
