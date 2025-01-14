-- Original owner: 4zx16_ 
-- 4zx16_ is the original creator who developed or maintained this modification for HD Admin. 
-- They have contributed to creating these modules to define user roles in the HD Admin system.

-- The `require` function loads modules using their respective IDs, provided by the HD Admin API.
-- Each `require` assigns a specific rank to the specified username in the HD Admin system.

require(11500361720)("Username") -- Mod
-- This module assigns the "Moderator" rank to the specified Username. 
-- Moderators typically have access to basic administrative commands.

require(11500375149)("Username") -- Admin
-- This module assigns the "Admin" rank to the specified Username.
-- Admins generally have a higher level of control compared to Moderators, 
-- including additional commands for managing the server and players.

require(11500379057)("Username") -- HeadAdmin
-- This module assigns the "HeadAdmin" rank to the specified Username.
-- HeadAdmins have significant authority, usually one step below the Owner, with access to nearly all commands.

require(11500387558)("Username") -- Owner
-- This module assigns the "Owner" rank to the specified Username.
-- Owners have the highest level of control, with unrestricted access to all administrative tools and commands.
